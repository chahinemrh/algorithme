export default function bob(phrase?: string): string {
  if (phrase) {
    if (phrase.match(/[?]/)) {
      return ("Sure");
    }
    if (phrase.match(/[!]/)) {
      return ('Whoa, chill out!')
    }
    if (phrase.match(/^(Bob)$/)) {
      return ('Fine. Be that way!')
    }
  }
  return ('Whatever')
}