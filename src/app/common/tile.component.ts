import {Component, Input} from '@angular/core'
@Component({
    selector:'an-tile',
    templateUrl:'app/common/tile.component.html'
}
)
export class TileComponent{
    @Input() tileColor:string;
}