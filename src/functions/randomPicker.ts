import _ from "lodash";
export default function randomPicker<T>(options: T[]):T {
  return _.sample(options) as never;
}
