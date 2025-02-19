import * as Tone from "tone";

export const tunings = {
  standard: ["E1", "A1", "D2", "G2"],
  dropD: ["D1", "A1", "D2", "G2"],
  dropC: ["C1", "G1", "C2", "F2"],
  BEAD: ["B0", "E1", "A1", "D2"],
};

let audioContextStarted = false;

export const createSynth = (toneType = "clean") => {
  let synth;

  switch (toneType) {
    case "synth":
      synth = new Tone.Synth({
        oscillator: {
          type: "sawtooth",
        },
        envelope: {
          attack: 0.02,
          decay: 0.2,
          sustain: 0.5,
          release: 1,
        },
      });
      const chorus = new Tone.Chorus(4, 2.5, 0.3).start();
      const synthGain = new Tone.Gain(0.6);
      synth.connect(chorus);
      chorus.connect(synthGain);
      synthGain.toDestination();
      break;

    case "warm":
      synth = new Tone.Synth({
        oscillator: {
          type: "sine",
        },
        envelope: {
          attack: 0.05,
          decay: 0.2,
          sustain: 0.8,
          release: 1.5,
        },
      });
      const filter = new Tone.Filter(800, "lowpass");
      synth.connect(filter);
      filter.toDestination();
      break;

    case "dirty":
      synth = new Tone.Synth({
        oscillator: {
          type: "square",
        },
        envelope: {
          attack: 0.01,
          decay: 0.3,
          sustain: 0.3,
          release: 0.8,
        },
      });
      const distortion = new Tone.Distortion(0.3); //  distortion
      const dirtyGain = new Tone.Gain(0.5); //  gain reduction
      synth.connect(distortion);
      distortion.connect(dirtyGain);
      dirtyGain.toDestination();
      break;

    case "acoustic":
      synth = new Tone.Synth({
        oscillator: {
          type: "triangle",
        },
        envelope: {
          attack: 0.05,
          decay: 0.3,
          sustain: 0.4,
          release: 1.5,
        },
      });
      const reverb = new Tone.Reverb({
        decay: 2,
        wet: 0.2,
      }).toDestination();
      reverb.generate();
      synth.connect(reverb);
      break;

    default: // 'clean'
      synth = new Tone.Synth({
        oscillator: {
          type: "triangle",
        },
        envelope: {
          attack: 0.005,
          decay: 0.1,
          sustain: 0.3,
          release: 1,
        },
      }).toDestination();
  }

  synth.volume.value = -12;
  return synth;
};

export const startAudioContext = async () => {
  if (!audioContextStarted) {
    if (Tone.context.state !== "running") {
      await Tone.context.resume();
    }
    await Tone.start();
    audioContextStarted = true;
  }
};

export const playNote = async (synth, note) => {
  if (!synth) return;

  try {
    await startAudioContext();
    await new Promise((resolve) => setTimeout(resolve, 100));
    synth.triggerAttackRelease(note, "0.8");
  } catch (error) {
    console.error("Error playing note:", error);
  }
};

export const setVolume = (synth, volume) => {
  if (!synth) return;

  if (volume <= 0) {
    synth.volume.value = -Infinity;
  } else {
    const db = 20 * Math.log10(volume);
    synth.volume.value = Math.max(-40, Math.min(0, db));
  }
};

export const isAudioContextRunning = () => {
  return Tone.context.state === "running";
};
