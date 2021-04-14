export type Glyph = {
  symbol: string,
  name: string
}

const glyph = (symbol: string, name: string) => ({
  symbol,
  name });

export const MoveAssesment = [
  glyph('!', 'Good move'),
  glyph('?', 'Mistake'),
  glyph('!!', 'Brilliant move'),
  glyph('??', 'Blunder'),
  glyph('!?', 'Interesting move'),
  glyph('?!', 'Dubious move'),
  glyph('□', 'Only move'),
  glyph('⨀', 'Zugzwang')
];

export const PositionAssesment = [
  glyph("=", "Equal position"),
  glyph("∞", "Unclear position"),
  glyph("⩲", "White is slightly better"),
  glyph("⩱", "Black is slightly better"),
  glyph("±", "White is better"),
  glyph("∓", "Black is better"),
  glyph("+-", "White is winning"),
  glyph("-+", "Black is winning")
];

export const Observation = [
  glyph("N", "Novelty"),
  glyph("↑↑", "Development"),
  glyph("↑", "Initiative"),
  glyph("→", "Attack"),
  glyph("⇆", "Counterplay"),
  glyph("⊕", "Time trouble"),
  glyph("=∞", "With compensation"),
  glyph("∆", "With the idea")
];

export const moveSymbols = MoveAssesment.map(_ => _.symbol);
export const posSymbols = PositionAssesment.map(_ => _.symbol);
export const obsSymbols = Observation.map(_ => _.symbol);
