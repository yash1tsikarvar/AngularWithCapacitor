/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module 'numeral' {
  const numeral: any;
  export = numeral;
}
