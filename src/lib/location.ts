export async function currentSite() {
  const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced })
  return nearestSite(position.coords)
}
