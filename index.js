const schedule = require('node-schedule');
const https = require('https');
const LCDPLATE = require('adafruit-i2c-lcd').plate;
var lcd = new LCDPLATE(1, 0x20);

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
  lcd.sendBytes(0, 0x1F); // Sainsmart 1602 I2C backlight on
  
  var total = 0, count = 0
  urls.forEach(function(url) {
    count += 1
    https.get(url, function(res) {
      if(res.statusCode == 200) {
        total += 1
      }
      lcd.clear();
      lcd.message(`${count} / ${urls.length}`);
    });
  });

  lcd.clear();
  if(total == urls.length) {
    lcd.message("All Good!");
    lcd.backlight(lcd.colors.GREEN);
  } else {
    lcd.message(`${urls.length - total} Down`);
    lcd.backlight(lcd.colors.RED);
  }

  lcd.sendBytes(0, 0x3F); // Sainsmart 1602 I2C backlight off
});
