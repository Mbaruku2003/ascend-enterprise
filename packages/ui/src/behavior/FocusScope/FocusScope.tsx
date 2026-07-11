/**
 * ============================================================================
 * Ascend UI
 * FocusScope
 * ============================================================================
 */

import {
    forwardRef,
    useEffect,
    useRef,
    type KeyboardEvent,
} from "react";

import { useMergedRefs } from "@/hooks";

import {
    getTabbableElements,
} from "./focus-utils";

import {
    registerScope,
    unregisterScope,
    isTopScope,
} from "./focus-manager";

import FocusGuard from "./focus-guards";

import type {
    FocusScopeProps,
} from "./FocusScope.types";

export const FocusScope = forwardRef<
    HTMLDivElement,
    FocusScopeProps
>(
(
{
    children,

    autoFocus = true,

    restoreFocus = true,

    trapped = true,

    onMountAutoFocus,

    onUnmountAutoFocus,

    onKeyDown,

    ...props
},
forwardedRef,
) => {

    const scopeRef =
        useRef<HTMLDivElement>(null);

    const mergedRef =
        useMergedRefs(
            forwardedRef,
            scopeRef,
        );

    /**
     * Element focused before
     * this scope mounted.
     */
    const previousFocusedElement =
        useRef<HTMLElement | null>(
            null,
        );

    /**
     * Register scope.
     */
    useEffect(() => {

        const scope =
            scopeRef.current;

        if (!scope) {

            return;

        }

        registerScope(scope);

        return () => {

            unregisterScope(scope);

        };

    }, []);

    /**
     * Remember focus.
     */
    useEffect(() => {

        previousFocusedElement.current =
            document.activeElement as HTMLElement;

    }, []);

    /**
     * Auto focus.
     */
    useEffect(() => {

        if (!autoFocus) {

            return;

        }

        const scope =
            scopeRef.current;

        if (!scope) {

            return;

        }

        const tabbables =
            getTabbableElements(scope);

        if (tabbables.length > 0) {

            tabbables[0].focus();

        } else {

            scope.focus();

        }

        onMountAutoFocus?.();

    }, [
        autoFocus,
        onMountAutoFocus,
    ]);

    /**
     * Restore focus.
     */
    useEffect(() => {

        return () => {

            if (!restoreFocus) {

                return;

            }

            onUnmountAutoFocus?.();

            previousFocusedElement
                .current
                ?.focus();

        };

    }, [
        restoreFocus,
        onUnmountAutoFocus,
    ]);

    /**
     * Trap focus.
     */
    function handleKeyDown(
        event: KeyboardEvent<HTMLDivElement>,
    ) {

        onKeyDown?.(event);

        if (
            event.defaultPrevented
        ) {

            return;

        }

        if (!trapped) {

            return;

        }

        const scope =
            scopeRef.current;

        if (
            !scope ||
            !isTopScope(scope)
        ) {

            return;

        }

        if (
            event.key !== "Tab"
        ) {

            return;

        }

        const tabbables =
            getTabbableElements(scope);

        if (
            tabbables.length === 0
        ) {

            event.preventDefault();

            scope.focus();

            return;

        }

        const first =
            tabbables[0];

        const last =
            tabbables[
                tabbables.length - 1
            ];

        const active =
            document.activeElement;

        if (
            event.shiftKey
        ) {

            if (
                active === first ||
                active === scope
            ) {

                event.preventDefault();

                last.focus();

            }

            return;

        }

        if (
            active === last
        ) {

            event.preventDefault();

            first.focus();

        }

    }
    return (
        <>
            {/* Focus guard before the scope */}
            <FocusGuard
                onFocus={() => {
                    if (!trapped) return;

                    const scope = scopeRef.current;

                    if (!scope || !isTopScope(scope)) {
                        return;
                    }

                    const tabbables =
                        getTabbableElements(scope);

                    if (tabbables.length > 0) {
                        tabbables[
                            tabbables.length - 1
                        ].focus();
                    } else {
                        scope.focus();
                    }
                }}
            />

            <div
                ref={mergedRef}
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                {...props}
            >
                {children}
            </div>

            {/* Focus guard after the scope */}
            <FocusGuard
                onFocus={() => {
                    if (!trapped) return;

                    const scope = scopeRef.current;

                    if (!scope || !isTopScope(scope)) {
                        return;
                    }

                    const tabbables =
                        getTabbableElements(scope);

                    if (tabbables.length > 0) {
                        tabbables[0].focus();
                    } else {
                        scope.focus();
                    }
                }}
            />
        </>
    );
},
);

FocusScope.displayName = "FocusScope";

export default FocusScope;
