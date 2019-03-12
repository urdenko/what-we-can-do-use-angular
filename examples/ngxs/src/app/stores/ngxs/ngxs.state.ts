import { State, Action, StateContext } from "@ngxs/store";
import { Search } from "./ngxs.actions";

@State({
  name: "ngxs"
})
export class NgxsState {
  // @Action(Search)
  // search({ patchState }: StateContext<AuthStateModel>, { payload }: Login) {}
}
