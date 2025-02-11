import * as Tone from "tone";

export const tunings = {
  standard: ["E1", "A1", "D2", "G2"],
  dropD: ["D1", "A1", "D2", "G2"],
  dropC: ["C1", "G1", "C2", "F2"],
  BEAD: ["B0", "E1", "A1", "D2"],
};

export const createSynth = () => {
  return new Tone.Synth().toDestination();
};

export const playNote = async (synth, note) => {
  await Tone.start();
  synth.triggerAttackRelease(note, "0.8");
};
