def beautiful():
    music.set_volume(2)
    playLeadBridge()
    playLeadMelody()
    playLeadEnding()

i = 0
def playEighth(note: number):
    music.play(music.tone_playable(note, 161),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(53)
def playDottedQuarter(note2: number):
    music.play(music.tone_playable(note2, 589),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(53)
def playHalf(note3: number):
    music.play(music.tone_playable(note3, 804),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(53)

def restHalf():
    music.rest(857)
def playLeadEnding():
    # Plays and queues on 1
    playDottedQuarter(330)
    playEighth(370)
    playQuarter(415)
    restQuarter()
    playEighth(415)
    playEighth(415)
    playEighth(415)
    playEighth(415)
    playTriplet(415, 370, 330)
def restQuarter():
    music.rest(428)
def playTriplet(note1: number, note22: number, note32: number):
    music.play(music.tone_playable(note1, 268),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(53)
    music.play(music.tone_playable(note22, 268),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(53)
    music.play(music.tone_playable(note32, 161),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(53)
def playQuarter(note4: number):
    music.play(music.tone_playable(note4, 375),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(53)
# restHalf()
def playLeadBridge():
    playQuarter(330)
    playEighth(415)
    playEighth(494)
    playQuarter(555)
    playEighth(555)
    playEighth(494)
    playQuarter(415)
    playEighth(415)
    playQuarter(415)
    playDottedQuarter(370)
    playQuarter(330)
    playEighth(415)
    playEighth(494)
    playQuarter(555)
    playEighth(555)
    playEighth(494)
    playDottedQuarter(415)
    playEighth(370)
def restWhole():
    music.rest(1714)
def restEighth():
    music.rest(214)
def playLeadMelody():
    # Begins on 3
    restEighth()
    playEighth(415)
    playEighth(370)
    playEighth(330)
    for index in range(2):
        j = 0
        while j < 2:
            playTriplet(330, 330, 330)
            playTriplet(330, 330, 330)
            playQuarter(370)
            playEighth(415)
            playEighth(370)
            restEighth()
            playEighth(415)
            playEighth(370)
            playEighth(330)
            j += 1
        playTriplet(330, 330, 330)
        playTriplet(330, 330, 330)
        playQuarter(415)
        playEighth(370)
        playEighth(370)
        restEighth()
        playEighth(415)
        playQuarter(370)
        playDottedQuarter(330)
        playEighth(370)
        playQuarter(415)
        restQuarter()
        j = 0
        while j < 4:
            playEighth(415)
            j += 1
        playTriplet(415, 370, 330)

def lightpause():
    basic.pause(100)

def on_button_pressed_a():
    celebration()

def celebration():
    control.in_background(beautiful)
    colors = [
            0xffff00, 0xb09eff, 0xff0000, 0xff00ff,
            0xffff00, 0x00ff00, 0xff0080, 0x00ffff,
            0x0000ff, 0xff0000, 0x7f00ff, 0xffa500, 
            0x00ff00
            
        ]

    for loop in range(28):  # Repeat the pattern 28 times
        i = 0
        while i < len(colors):
            color = colors[i]
            if i % 2 == 0:
                CutebotPro.color_light(CutebotProRGBLight.RGBL, color)
            else:
                CutebotPro.color_light(CutebotProRGBLight.RGBR, color)
            lightpause()
            i += 1
    final_color = 0xffffff  # End on white
    CutebotPro.color_light(CutebotProRGBLight.RGBL, final_color)
    CutebotPro.color_light(CutebotProRGBLight.RGBR, final_color)

input.on_button_pressed(Button.A, on_button_pressed_a)
