import {NgModule} from "@angular/core";
import {SocialComponent} from "./social.component";
import {SocialRoutingModule} from "./social-routing.module";
import {SaCommonModule} from "projects/common/src/lib/sa-common.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, SocialRoutingModule, ReactiveFormsModule, SaCommonModule],
  exports: [],
  declarations: [SocialComponent]
})
export class SocialModule {
}
