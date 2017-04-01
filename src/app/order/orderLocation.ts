import { Location } from '../../domain/index';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
export class AluecoOrderLocation implements Location {
	constructor(public address? : string, public zip? : string, public city? : string, public country? : string){ };

	public toFormGroup(formBuilder : FormBuilder){
		return formBuilder.group({
			address: [this.address || '', Validators.required],
			zip: [this.zip || '', Validators.required],
			city : [this.city || '', Validators.required],
			country: [this.country || '', Validators.required]
		})
	}
}
