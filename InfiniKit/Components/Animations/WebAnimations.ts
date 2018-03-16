
export interface AnimationSequence {
  [key: string]: number[] | string[];
}

export type AnimationEffectTimingFillMode = "none" | "forwards" | "backwards" | "both" | "auto";
export type AnimationEffectTimingPlaybackDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
export type AnimationPlayState = "idle" | "pending" | "running" | "paused" | "finished";

export declare class AnimationPlaybackEvent {
    constructor(target: Animation, currentTime: number, timelineTime: number);
    target: Animation;
    currentTime: number;
    timelineTime: number;
    type: string;
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: Animation;
    defaultPrevented: boolean;
    eventPhase: number;
    timeStamp: number;
}

export interface AnimationKeyFrame {
    easing?: string;
    offset?: number;
    [key: string]: string | number | [string | number, string | number] | undefined;
}

export interface AnimationTimeline {
    currentTime: number;
    getAnimations(): Animation[];
    play(effect: KeyframeEffect): Animation;
}
export interface AnimationEffectTiming {
    delay?: number;
    direction?: AnimationEffectTimingPlaybackDirection;
    duration?: number;
    easing?: string;
    endDelay?: number;
    fill?: AnimationEffectTimingFillMode;
    iterationStart?: number;
    iterations?: number;
    playbackRate?: number;
}
export declare class KeyframeEffect {
    constructor(target: HTMLElement, effect: AnimationKeyFrame | AnimationKeyFrame[] | AnimationSequence, timing: number | AnimationEffectTiming, id?: string);
    activeDuration: number;
    onsample: (timeFraction: number | null, effect: KeyframeEffect, animation: Animation) => void | undefined;
    parent: KeyframeEffect | null;
    target: HTMLElement;
    timing: AnimationEffectTiming;
    getFrames(): AnimationKeyFrame[];
    remove(): void;
}
export type AnimationEventListener = (evt: AnimationPlaybackEvent) => void;

export declare class Animation {
    constructor(effect: KeyframeEffect, timeline?: AnimationTimeline);
    currentTime: number;
    id: string;
    oncancel: AnimationEventListener;
    onfinish: AnimationEventListener;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    startTime: number;
    cancel(): void;
    finish(): void;
    pause(): void;
    play(): void;
    reverse(): void;
    addEventListener(type: "finish" | "cancel", handler: AnimationEventListener): void;
    removeEventListener(type: "finish" | "cancel", handler: AnimationEventListener): void;
    effect: KeyframeEffect;
    readonly finished: Promise<Animation>;
    readonly ready: Promise<Animation>;
    timeline: AnimationTimeline;
}

export declare class SequenceEffect extends KeyframeEffect {
    constructor(effects: KeyframeEffect[]);
}
export declare class GroupEffect extends KeyframeEffect {
    constructor(effects: KeyframeEffect[]);
}
export interface Element {
    animate(effect: AnimationKeyFrame | AnimationKeyFrame[] | AnimationSequence, timing: number | AnimationEffectTiming): Animation;
    getAnimations(): Animation[];
}
export interface Document {
    timeline: AnimationTimeline;
}
