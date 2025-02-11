import * as Tone from "tone";

export const tunings = {
  standard: ["E1", "A1", "D2", "G2"],
  dropD: ["D1", "A1", "D2", "G2"],
  dropC: ["C1", "G1", "C2", "F2"],
  BEAD: ["B0", "E1", "A1", "D2"],
};

let audioContextStarted = false;

export const createSynth = () => {
  return new Tone.Synth({
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
};

const startAudioContext = async () => {
  if (!audioContextStarted) {
    if (Tone.context.state !== "running") {
      await Tone.context.resume();
    }
    await Tone.start();
    audioContextStarted = true;
  }
};

export const playNote = async (synth, note) => {
  try {
    await startAudioContext();

    await new Promise((resolve) => setTimeout(resolve, 100));

    synth.triggerAttackRelease(note, "0.8");
  } catch (error) {
    console.error("Error playing note:", error);
  }
};

export const isAudioContextRunning = () => {
  return Tone.context.state === "running";
};
