import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Observable } from "@zcomponent/core";
import { Div as Div } from "@zcomponent/html/lib/div";
import { default as pigeon} from "./pigeon.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents html/element/div
 **/
export class modifyZIndex extends Behavior<Div> {

	protected zcomponent = this.getZComponentInstance(pigeon);
		
	/**@zui 
	 * @zdefault 0 
	*/
	public ZIndex = new Observable<number>(0);

	constructor(contextManager: ContextManager, instance: Div, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.register(this.ZIndex,this.modifyIndex);
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

	private modifyIndex = (z)=>
	{
		this.instance.element.style.zIndex = `${z}`
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Run at design time
registerBehaviorRunAtDesignTime(modifyZIndex);
