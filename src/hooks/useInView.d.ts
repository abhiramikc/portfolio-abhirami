interface UseInViewOptions {
    threshold?: number | number[];
    triggerOnce?: boolean;
    margin?: string;
}
export declare const useInView: (options?: UseInViewOptions) => {
    ref: import("react").MutableRefObject<any>;
    inView: boolean;
};
export {};
