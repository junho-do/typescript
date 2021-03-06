type PositionType = {
  x: number;
  y: number;
}
interface PositionInterface {
  x: number;
  y: number;
}

// object β­οΈ 
const obj1: PositionType = {
  x: 1,
  y: 1,
}
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
}

// class β­οΈ
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };


// π only interfaces can be merged. // μ€μ§ μΈν°νμ΄μ€λ§ μ μκ°λ₯.
interface PositionInterface {
  z: number;
}

// type PositionType {} νμμ X

// π Type aliases can use computed properties
type Person = {
  name: string,
  age: string,
}
type Name = Person['name'] // string

type NumberType = number;
type Direction = 'left' | 'right';