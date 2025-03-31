import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { DefaultCookieConsent as DefaultCookieConsent_0 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_1 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_2 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { PerspectiveCamera as PerspectiveCamera_4 } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";
import { MouseOrbit as MouseOrbit_5 } from "@zcomponent/three/lib/behaviors/MouseOrbit";
import { testOrbit as testOrbit_6 } from "./testOrbit";
import { default as parkScene_zcomp_7 } from "./Park/parkScene.zcomp";
import { default as pigeon_zcomp_8 } from "./pigeon/pigeon.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		DefaultCookieConsent: DefaultCookieConsent_0 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_1 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_2 & {
			behaviors: {

			}
		},
		Defaults: Group_3 & {
			behaviors: {

			}
		},
		PerspectiveCamera: PerspectiveCamera_4 & {
			behaviors: {
				0: MouseOrbit_5,
				MouseOrbit: MouseOrbit_5,
				1: testOrbit_6,
				testOrbit: testOrbit_6,
			}
		},
		parkScene: parkScene_zcomp_7 & {
			behaviors: {

			}
		},
		pigeon: pigeon_zcomp_8 & {
			behaviors: {

			}
		},
		pigeon0: pigeon_zcomp_8 & {
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
