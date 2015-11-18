import { Promise, Observable, EventEmitter } from 'angular2/src/facade/async';
import { ChangeDetectorRef, PipeOnDestroy, PipeTransform } from 'angular2/src/core/change_detection';
/**
 * The `async` pipe subscribes to an Observable or Promise and returns the latest value it has
 * emitted.
 * When a new value is emitted, the `async` pipe marks the component to be checked for changes.
 *
 * ### Example
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {@example core/pipes/ts/async_pipe/async_pipe_example.ts region='AsyncPipe'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. Every 500ms, the `time` Observable updates the view with the current time.
 *
 * ```typescript
 * ```
 */
export declare class AsyncPipe implements PipeTransform, PipeOnDestroy {
    private _strategy;
    constructor(_ref: ChangeDetectorRef);
    onDestroy(): void;
    transform(obj: Observable<any> | Promise<any> | EventEmitter<any>, args?: any[]): any;
}