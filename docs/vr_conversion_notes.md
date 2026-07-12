# VR Conversion Notes

## What was modified

This version adds two VR-compatible protocol files:

- `vr_static_protocol.html`
- `vr_subtle_moving_protocol.html`

The original browser files remain available:

- `static_protocol.html`
- `subtle_moving_protocol.html`
- `post_experiment_questionnaire.html`

## Why these files were added

The original project used standard HTML image presentation. For phone-in-headset viewing and compatible immersive browsers, the visual presentation layer was converted into a VR-compatible layer while preserving the experiment logic.

## Presentation logic

### WebXR / A-Frame mode
When `navigator.xr.isSessionSupported("immersive-vr")` is available and the device is not iOS, the experiment uses A-Frame.

Stimulus images are rendered as:

- `<a-image>` positioned at approximately `0 1.6 -2`
- width `3.56`
- height `2.00`

This places each stimulus approximately 2 meters in front of the participant at eye level.

### iPhone / Irusu Monster fallback mode
iOS Safari does not provide full native immersive WebXR support. Therefore, the VR files automatically fall back to a stereoscopic side-by-side Cardboard display:

- left eye: same stimulus image
- right eye: same stimulus image
- full-screen landscape mode
- suitable for phone-based VR headsets such as Irusu Monster

## Functionality preserved

The following functions and logic are preserved:

- participant code entry
- age entry
- gender entry
- optional health condition field
- health condition defaults to `None` if blank
- fixed trial structure
- 90-second initial baseline
- 30-second pre-colour neutral baseline
- 150-second colour exposure
- no rest breaks
- event logging
- performance timestamping
- ISO timestamping
- CSV export
- JSON export
- stimulus image sequence
- post-experiment questionnaire

## Scientific timing

Timing is still controlled with `performance.now()` inside the same timed phase structure. The A-Frame/Cardboard presentation layer only changes how images are displayed, not the timing engine.

## GitHub Pages

The project remains GitHub Pages compatible. Upload the full folder and enable Pages from the root of the main branch.
