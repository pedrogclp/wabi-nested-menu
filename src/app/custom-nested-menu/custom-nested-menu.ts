export interface ICustomNestedMenu {
  name: string,
  id: number | null,
  parentId: number | null,
  childrens?: ICustomNestedMenu[] | null
};

export class CustomNestedMenuClass implements ICustomNestedMenu {
  name: string = '';
  id: number | null = null;
  parentId: number | null = null;
  childrens?: CustomNestedMenuClass[] | null | undefined;
}
