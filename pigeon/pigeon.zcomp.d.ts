import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { CSS as CSS_0 } from "@zcomponent/html/lib/CSS";
import { HTML as HTML_1 } from "@zcomponent/three/lib/components/HTML";
import { Div as Div_2 } from "@zcomponent/html/lib/div";
import { adjustRotation as adjustRotation_3 } from "./adjustRotation";
import { adjustRotation as adjustRotation_4 } from "./adjustRotation";
import { Img as Img_5 } from "@zcomponent/html/lib/img";
import { hideNullPattern as hideNullPattern_6 } from "./hideNullPattern";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		CSS: CSS_0 & {
			behaviors: {

			}
		},
		HTML: HTML_1 & {
			behaviors: {

			}
		},
		Neck: Div_2 & {
			behaviors: {
				0: adjustRotation_3,
				adjustRotation: adjustRotation_3,
			}
		},
		beak: Div_2 & {
			behaviors: {

			}
		},
		beakBlob: Div_2 & {
			behaviors: {

			}
		},
		body: Div_2 & {
			behaviors: {
				0: adjustRotation_4,
				adjustRotation: adjustRotation_4,
			}
		},
		eye: Div_2 & {
			behaviors: {

			}
		},
		highight_holder: Div_2 & {
			behaviors: {

			}
		},
		iris: Div_2 & {
			behaviors: {

			}
		},
		large_highlight: Div_2 & {
			behaviors: {

			}
		},
		neck_highlight: Div_2 & {
			behaviors: {

			}
		},
		pupil: Div_2 & {
			behaviors: {

			}
		},
		small_highlight: Div_2 & {
			behaviors: {

			}
		},
		tail: Div_2 & {
			behaviors: {
				0: adjustRotation_3,
				adjustRotation: adjustRotation_3,
			}
		},
		wing: Div_2 & {
			behaviors: {
				0: adjustRotation_3,
				adjustRotation: adjustRotation_3,
			}
		},
		legs0: Div_2 & {
			behaviors: {

			}
		},
		left_leg: Div_2 & {
			behaviors: {

			}
		},
		right_leg: Div_2 & {
			behaviors: {

			}
		},
		overlay: Img_5 & {
			behaviors: {
				0: hideNullPattern_6,
				hideNullPattern: hideNullPattern_6,
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
