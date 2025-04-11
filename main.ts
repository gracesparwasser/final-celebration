let i = 0
function playEighth(note: number) {
    music.play(music.tonePlayable(note, 161), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function playDottedQuarter(note2: number) {
    music.play(music.tonePlayable(note2, 589), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function playHalf(note3: number) {
    music.play(music.tonePlayable(note3, 804), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function restHalf() {
    music.rest(857)
}

function playLeadEnding() {
    //  Plays and queues on 1
    playDottedQuarter(330)
    playEighth(370)
    playQuarter(415)
    restQuarter()
    playEighth(415)
    playEighth(415)
    playEighth(415)
    playEighth(415)
    playTriplet(415, 370, 330)
}

function restQuarter() {
    music.rest(428)
}

function playTriplet(note1: number, note22: number, note32: number) {
    music.play(music.tonePlayable(note1, 268), music.PlaybackMode.UntilDone)
    music.rest(53)
    music.play(music.tonePlayable(note22, 268), music.PlaybackMode.UntilDone)
    music.rest(53)
    music.play(music.tonePlayable(note32, 161), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function playQuarter(note4: number) {
    music.play(music.tonePlayable(note4, 375), music.PlaybackMode.UntilDone)
    music.rest(53)
}

//  restHalf()
function playLeadBridge() {
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
}

function restWhole() {
    music.rest(1714)
}

function restEighth() {
    music.rest(214)
}

function playLeadMelody() {
    let j: number;
    //  Begins on 3
    restEighth()
    playEighth(415)
    playEighth(370)
    playEighth(330)
    for (let index = 0; index < 2; index++) {
        j = 0
        while (j < 2) {
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
        }
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
        while (j < 4) {
            playEighth(415)
            j += 1
        }
        playTriplet(415, 370, 330)
    }
}

function lightpause() {
    basic.pause(100)
}

function celebration() {
    let i: number;
    let color: number;
    control.inBackground(function beautiful() {
        music.setVolume(2)
        playLeadBridge()
        playLeadMelody()
        playLeadEnding()
    })
    let colors = [0xffff00, 0xb09eff, 0xff0000, 0xff00ff, 0xffff00, 0x00ff00, 0xff0080, 0x00ffff, 0x0000ff, 0xff0000, 0x7f00ff, 0xffa500, 0x00ff00]
    for (let loop = 0; loop < 28; loop++) {
        //  Repeat the pattern 28 times
        i = 0
        while (i < colors.length) {
            color = colors[i]
            if (i % 2 == 0) {
                CutebotPro.colorLight(CutebotProRGBLight.RGBL, color)
            } else {
                CutebotPro.colorLight(CutebotProRGBLight.RGBR, color)
            }
            
            lightpause()
            i += 1
        }
    }
    let final_color = 0xffffff
    //  End on white
    CutebotPro.colorLight(CutebotProRGBLight.RGBL, final_color)
    CutebotPro.colorLight(CutebotProRGBLight.RGBR, final_color)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    celebration()
})
