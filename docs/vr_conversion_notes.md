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


## iPhone 16 Pro Max / Irusu Monster tuning update

The uploaded phone VR screenshot was (736, 1600). It appears vertically stacked because it is a rotated screenshot representation. For actual headset use, the iPhone should be rotated to landscape and placed inside the Irusu Monster.

Changes made:
- Cardboard fallback remains side-by-side in landscape for headset use.
- Portrait screenshot mode now stacks the two eyes vertically so the screenshot representation matches the user's example.
- Each eye window has a rounded lens-style vignette similar to Cardboard/phone VR apps.
- Each eye image is slightly enlarged to 108% to fill the optical window.
- Left and right eyes use small opposite crop offsets to create a mild pseudo-stereo room-depth impression.
- Top and bottom text overlays are reduced so they do not distract from the room stimulus.
- In `vr_subtle_moving_protocol.html`, the subtle cue is now visible during the neutral grey baseline also.
- The cue was slowed and reduced in opacity so it remains gentle but detectable in the headset.


## Irusu Monster 42 mm / 110° FOV tuning

The latest VR HTML files were tuned for the user-provided Irusu Monster headset details:
- 42 mm HD lenses
- 110° FOV
- iPhone 16 Pro Max display

Presentation changes:
- fixed landscape side-by-side Cardboard layout
- no portrait stacking during actual experiment
- rotate-phone message if opened in portrait
- 112% image fill per eye to better match lens coverage
- rounded lens vignette to approximate headset optics
- mild left/right crop offset for pseudo-stereo depth
- fixation marker changed to a small white dot
- subtle moving cue remains present during grey baseline and colour exposure in the moving protocol
