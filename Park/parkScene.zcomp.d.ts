import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Plane as Plane_0 } from "@zcomponent/three/lib/components/meshes/Plane";
import { Box as Box_1 } from "@zcomponent/three/lib/components/meshes/Box";
import { ShadowPlane as ShadowPlane_2 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { MeshStandardMaterial as MeshStandardMaterial_3 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { DirectionalLight as DirectionalLight_4 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { ImageTexture as ImageTexture_5 } from "@zcomponent/three/lib/components/textures/ImageTexture";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Plane: Plane_0 & {
			behaviors: {

			}
		},
		Box: Box_1 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_2 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_3 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_3 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_4 & {
			behaviors: {

			}
		},
		ImageTexture: ImageTexture_5 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;

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
}

export default Comp;
