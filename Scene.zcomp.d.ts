import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

<<<<<<< Updated upstream
import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { DefaultCookieConsent as DefaultCookieConsent_1 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_2 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_5 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { PerspectiveCamera as PerspectiveCamera_6 } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";
import { ShadowPlane as ShadowPlane_7 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
=======
import { DefaultCookieConsent as DefaultCookieConsent_0 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_1 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_2 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { PerspectiveCamera as PerspectiveCamera_4 } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";
import { MouseOrbit as MouseOrbit_5 } from "@zcomponent/three/lib/behaviors/MouseOrbit";
import { testOrbit as testOrbit_6 } from "./testOrbit";
import { default as parkScene_zcomp_7 } from "./Park/parkScene.zcomp";
>>>>>>> Stashed changes

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Box: Box_0 & {
			behaviors: {

			}
		},
<<<<<<< Updated upstream
		DefaultCookieConsent: DefaultCookieConsent_1 & {
=======
		DefaultEnvironment: DefaultEnvironment_1 & {
>>>>>>> Stashed changes
			behaviors: {

			}
		},
<<<<<<< Updated upstream
		DefaultEnvironment: DefaultEnvironment_2 & {
=======
		DefaultLoader: DefaultLoader_2 & {
>>>>>>> Stashed changes
			behaviors: {

			}
		},
<<<<<<< Updated upstream
		DefaultLoader: DefaultLoader_3 & {
=======
		Defaults: Group_3 & {
>>>>>>> Stashed changes
			behaviors: {

			}
		},
<<<<<<< Updated upstream
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_5 & {
			behaviors: {

			}
		},
		PerspectiveCamera: PerspectiveCamera_6 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_7 & {
=======
		PerspectiveCamera: PerspectiveCamera_4 & {
			behaviors: {
				0: MouseOrbit_5,
				MouseOrbit: MouseOrbit_5,
				1: testOrbit_6,
				testOrbit: testOrbit_6,
			}
		},
		parkScene: parkScene_zcomp_7 & {
>>>>>>> Stashed changes
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
