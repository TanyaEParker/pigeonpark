import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, started } from "@zcomponent/core";
import { CSSDisplay } from "@zcomponent/html/lib/HTMLElement";
import { Img as Img } from "@zcomponent/html/lib/img";
import { default as pigeon} from "./pigeon.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents html/element/img
 **/
export class hideNullPattern extends Behavior<Img> {

	protected zcomponent = this.getZComponentInstance(pigeon);
		

	constructor(contextManager: ContextManager, instance: Img, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);
		started(contextManager).then(()=>
		{
			const src = instance.element.src;
			if(src.includes('undefined'))
			this.hidePattern();
		});
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

	private hidePattern = ()=>
	{
		console.log('img broken');
		this.instance.display.value = CSSDisplay.none;
	};

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Run at design time
registerBehaviorRunAtDesignTime(hideNullPattern);
