const schedule = require('node-schedule');
const https = require('https');
const sleep = require('sleep');
const LCDPLATE = require('adafruit-i2c-lcd').plate;
var lcd = new LCDPLATE(1, 0x20);

lcd.sendBytes(0, 0x1F); // Sainsmart 1602 I2C backlight on
lcd.backlight(lcd.colors.WHITE);
lcd.clear();

var urls = [
  'https://aurore-t-001.herokuapp.com/',
  'https://aurore-t-002.herokuapp.com/',
  'https://aurore-t-003.herokuapp.com/',
  'https://aurore-t-004.herokuapp.com/',
  'https://aurore-t-005.herokuapp.com/'
]

var job = schedule.scheduleJob('*/1 * * * *', function() {
  console.log("Job started running ...")

  var total = 0, count = 0
  urls.forEach(function(url) {
    count += 1
    console.log(`Processing url ${url}`)
    https.get(url, function(res) {
      if(res.statusCode == 200) {
        total += 1
        console.log(`${url} is UP`)
      } else {
        console.log(`${url} is DOWN`)
      }

      lcd.clear();
      lcd.message(`${count} / ${urls.length}`);

      sleep.sleep(2) //Sleep 1 second

      if(count == urls.legnth) {
        lcd.clear();
        if(total == urls.length) {
          console.log("All urls are UP")
          lcd.message("All Good!");
          lcd.backlight(lcd.colors.GREEN);
        } else {
          console.log(`${urls.length - total} urls are DOWN`)
          lcd.message(`${urls.length - total} Down`);
          lcd.backlight(lcd.colors.RED);
        }
        console.log("Job finished running.")
      }
    });
  });
});

console.log("Job is scheduled to run every 1 minute...")
