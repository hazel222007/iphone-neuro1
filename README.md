# NeuroColor Atlas – iPhone Stereoscopic VR Experiment

This version uses the supplied **1774 × 887 stereoscopic room reference** as the fixed spatial template. The room geometry, furniture, shoe rack, headset mask, and left–right alignment are preserved across all conditions.

## Included experiment

Open `index.html`, then select **Open the VR Experiment**. The active protocol is `vr_subtle_moving_protocol.html`.

The protocol contains:

- 17 CIELAB-defined room conditions;
- a neutral grey baseline at L*=50, a*=0, b*=0;
- 90-second initial baseline;
- 30-second baseline before every condition;
- 150-second room exposure;
- an ultra-subtle, slow and synchronized moving bubble in both eye views during baseline and colour exposure;
- fullscreen, landscape-orientation, and screen-wake-lock requests where supported;
- CSV and JSON event logging.

## iPhone use

Serve this folder over HTTPS. Open the site in Safari, add it to the Home Screen, launch it from the Home Screen, rotate the phone to landscape, and press **Start Full-Screen Experiment**. The manifest is configured for fullscreen landscape display.

Do not change screen brightness, True Tone, Night Shift, colour filters, or automatic brightness between participants. For research use, verify the final displayed colours on the actual iPhone through device-specific measurement and calibration.

## CIELAB targets

The 12 chromatic conditions use L*=60 and approximately C*=35. The five achromatic conditions use L*=10, 30, 50, 70, and 90 with a*=b*=0. Values are encoded in the experiment log and shown on the setup screen.

## Notes

The static bubble present in the supplied reference was removed from the stimulus assets. The experiment draws the bubble separately, allowing identical subtle movement in both eye views. The active experimental file is `vr_subtle_moving_protocol.html`.


## Bubble movement update (v4)
The cue now drifts only a few pixels over long cycles, with minimal size and opacity variation. Both eye views use exactly the same motion signal to preserve comfortable binocular fusion.
