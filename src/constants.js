export const CONTRACT_ADDRESS = "0x951b62E321Ef2391914B35Af0e3b8FD7737652d2";

export const transformCharacterData = ({
  name,
  imageURI,
  hp,
  maxHp,
  attackDamage,
}) => {
  return {
    name,
    imageURI,
    hp: hp.toNumber(),
    maxHp: maxHp.toNumber(),
    attackDamage: attackDamage.toNumber(),
  };
};