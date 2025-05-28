import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { useRenderer, useScene } from "@zcomponent/three";
import { PerspectiveCamera as PerspectiveCamera } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { default as Scene} from "./Scene.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Camera/PerspectiveCamera

 * @zparents three/Object3D/Group/Camera
 **/
export class testOrbit extends Behavior<PerspectiveCamera> {

	protected zcomponent = this.getZComponentInstance(Scene);
		

	constructor(contextManager: ContextManager, instance: PerspectiveCamera, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);
		const renderer = useRenderer(contextManager);
		const scene = useScene(contextManager)
		const orbit = new OrbitControls(instance.element,renderer.domElement);
		orbit.enableDamping = true;
		/*
		// You can register handlers for events on the node that this behavior
		// is attached to like this:

		this.register(this.instance.onPointerDown, evt => {
			// Code to handle event
		});

		// Or against other nodes in your zcomp file
		this.register(this.zcomponent.nodes.MyNode.onPointerDown, evt => {

		});
		
		*/
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(testOrbit);
