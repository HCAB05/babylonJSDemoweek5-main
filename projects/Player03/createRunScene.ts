import {
  Scene,
  Mesh,
  HemisphericLight,
  Camera,
} from "@babylonjs/core";

export interface SceneData {
      scene: Scene;
      light?: HemisphericLight;
      ground?: Mesh;
      camera?: Camera;
}
import type { SceneData } from "./interfaces";

export default function createRunScene(runScene: SceneData) {
  runScene.scene.onAfterRenderObservable.add(() => {});
}