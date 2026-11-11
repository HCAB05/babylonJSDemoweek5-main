import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color3,
  HemisphericLight,
  DirectionalLight,
  PointLight,
  SpotLight,
  MeshBuilder,
  Mesh,
  PBRMaterial,
  RectAreaLight,
  StandardMaterial,
  ShadowGenerator,
  Texture,
  TransformNode
} from "@babylonjs/core";

function createBox(scene: Scene) {
  let box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
  box.position.y = 0.0;
  box.position.y = 0.501
  const myMaterial = new StandardMaterial("myMaterial", scene);
  const texture = new Texture("assets/leopard_fur.jpg", scene);
  myMaterial.diffuseTexture = texture;
  box.material = myMaterial;
  return box;
}