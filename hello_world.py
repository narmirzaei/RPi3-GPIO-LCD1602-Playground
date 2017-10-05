#!/usr/bin/python
import time
import atexit
# https://github.com/adafruit/Adafruit_Python_CharLCD/blob/master/Adafruit_CharLCD/Adafruit_CharLCD.py
import Adafruit_CharLCD as LCD

# Initialize the LCD using the pins
lcd = LCD.Adafruit_CharLCDPlate()

lcd.clear()
lcd.message('Hello, World!')

print('Press Ctrl-C to quit.')
while True:
	lcd.set_color(1.0, 0.0, 0.0)
	time.sleep(1.0)
	lcd.set_color(0.0, 1.0, 0.0)
	time.sleep(1.0)
	lcd.set_color(0.0, 0.0, 1.0)
	time.sleep(1.0)
