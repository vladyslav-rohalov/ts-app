import { FeaturesList, FeturesItem, FeaturesSubItem } from './features.styled';

export default function Features() {
  return (
    <FeaturesList>
      <FeturesItem>
        432k+ <FeaturesSubItem>Collictions</FeaturesSubItem>
      </FeturesItem>
      <FeturesItem>
        200k+ <FeaturesSubItem>Artists</FeaturesSubItem>
      </FeturesItem>
      <FeturesItem>
        10k+ <FeaturesSubItem>Comunity</FeaturesSubItem>
      </FeturesItem>
    </FeaturesList>
  );
}
