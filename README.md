# NeuroColor Atlas – Exact Image Colour-Room Project

This project uses the exact blue room image as the base visual stimulus template and provides two browser-based protocols:

1. **Static Colour Room**
   - best for strict physiological interpretation

2. **Subtle Moving Cue Colour Room**
   - best for older adults / dementia participants to reduce boredom and maintain attention
   - cue updated to be more clearly visible while still gentle

## Changes incorporated

- the exact room image is included in `assets/base/exact_blue_room.png`
- image-based colour stimuli are provided for all 17 colours in `assets/stimuli/`
- **no rest breaks**
- at the beginning, the protocol asks only:
  - participant code
  - age
  - gender
  - any health conditions (optional; blank is recorded as **None**)
- when the experiment starts, it attempts to go **full screen**
- timings:
  - initial neutral grey baseline: 90 seconds
  - neutral grey baseline before each colour: 30 seconds
  - colour-room exposure: 150 seconds

## Main files

- `index.html` – landing page with links to both protocols
- `static_protocol.html` – static colour room protocol
- `subtle_moving_protocol.html` – subtle moving cue protocol
- `post_experiment_questionnaire.html` – separate subjective ratings after exposure

## GitHub Pages

Upload the whole folder to a GitHub repository and enable GitHub Pages from the root of the `main` branch.


## VR-compatible version

This package now includes VR-compatible protocol files:

- `vr_static_protocol.html`
- `vr_subtle_moving_protocol.html`

These use A-Frame/WebXR where supported. On iPhone Safari, the files automatically fall back to stereoscopic side-by-side Cardboard mode for phone-based VR headsets such as Irusu Monster.

See `docs/vr_conversion_notes.md` for implementation details.


## Irusu Monster iPhone tuning update

The VR files were tuned for iPhone 16 Pro Max inside the Irusu Monster headset:
- `vr_static_protocol.html`
- `vr_subtle_moving_protocol.html`

Use the phone in landscape orientation inside the headset. If a phone screenshot appears vertically stacked, that is the rotated screenshot view of the same two-eye layout.

The subtle moving cue now appears during both neutral grey baseline and colour exposure.


## Irusu Monster optical profile update

The VR files were retuned using the headset specifications provided:
- 42 mm HD lenses
- 110° field of view
- iPhone 16 Pro Max display
- phone must be used in landscape mode inside the headset

The Cardboard fallback now uses a fixed landscape side-by-side view with lens-style rounded vignettes and wider image fill. It does not stack the views in portrait; instead it asks the user to rotate the phone.
