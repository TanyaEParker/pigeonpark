import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { DefaultCookieConsent as DefaultCookieConsent_0 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_1 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { PerspectiveCamera as PerspectiveCamera_3 } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";
import { MouseOrbit as MouseOrbit_4 } from "@zcomponent/three/lib/behaviors/MouseOrbit";
import { testOrbit as testOrbit_5 } from "../testOrbit";
import { default as parkScene_zcomp_6 } from "../Park/parkScene.zcomp";
import { DefaultEnvironment as DefaultEnvironment_7 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { default as pigeon_zcomp_8 } from "../pigeon/pigeon.zcomp";
import { renderOrder as renderOrder_9 } from "../renderOrder";

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
		DefaultLoader: DefaultLoader_1 & {
			behaviors: {

			}
		},
		Defaults: Group_2 & {
			behaviors: {

			}
		},
		PerspectiveCamera: PerspectiveCamera_3 & {
			behaviors: {
				0: MouseOrbit_4,
				MouseOrbit: MouseOrbit_4,
				1: testOrbit_5,
				testOrbit: testOrbit_5,
			}
		},
		parkScene: parkScene_zcomp_6 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_7 & {
			behaviors: {

			}
		},
		pigeon: pigeon_zcomp_8 & {
			behaviors: {
				0: renderOrder_9,
				renderOrder: renderOrder_9,
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
