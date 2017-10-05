#!/usr/bin/python
import time
import atexit
import Adafruit_CharLCD as LCD

# Initialize the LCD using the pins
lcd = LCD.Adafruit_CharLCDPlate()

print 'Registering atexit.stop'
atexit.register(stop)
print 'Registered atexit.stop'

lcd.set_color(0.0, 0.0, 1.0)
lcd.clear()
lcd.message('Hello, World!')
time.sleep(3.0)
