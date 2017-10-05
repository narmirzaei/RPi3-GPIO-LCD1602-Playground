# RPi3-GPIO-LCD1602-Playground
A little playground for a I2C RPi3 LCD 16x02 RBG Plate

I have a Raspberry Pi 3 with I2C RGB LCD 16x2 Display shield sitting directly on the board. It uses a MCP23017 chipset. This is a playground to see what I can do with this module

In order to begin we should have dependencies installed:

```
sudo apt-get update
sudo apt-get install build-essential python-dev python-smbus python-pip
```

For a Raspberry Pi we install RPi.GPIO library by executing:

```sudo pip install RPi.GPIO```

We're going to use the <b>Adafruit_CharLCD</b> module to code for the LCD in Python:

```
sudo pip install Adafruit-GPIO Adafruit-CharLCD
```
