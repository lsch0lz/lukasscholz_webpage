declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
    import { LoadingManager, Loader } from 'three';

    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (gltf: GLTF) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
    }
}
