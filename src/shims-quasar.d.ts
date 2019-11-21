import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $event: Vue;
    $logger: typeof console;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    logger?: string;
    preFetch?: (options: any) => void | Promise<void>;
  }
}
