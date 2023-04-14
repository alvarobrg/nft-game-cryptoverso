export const CONTRACT_ADDRESS = "0xec023b7E3Aaa22328dB91a360de49df26a982a59";

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