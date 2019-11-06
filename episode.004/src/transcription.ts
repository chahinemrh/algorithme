export default function transcription(DNA: string): string | never {
  let newSequence: string = "";
  const equivalence:any = {G: 'C', C: 'G', T: 'A', A: 'U'}
  let keys = Object.keys(equivalence);

  for (const nucleotide of DNA) {
    let match: boolean = false;
    keys.forEach(function(key) {
      if (key === nucleotide){
        match = true;
      }
    })
    if (match === false)
      throw new Error(`Nucleotide ${nucleotide} does not exist`)
     newSequence = newSequence.concat(equivalence[nucleotide])
  }
  return newSequence
}
