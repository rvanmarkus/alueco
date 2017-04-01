import { IAluecoMaterial } from '../../domain/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class AluecoMaterial implements IAluecoMaterial{
	constructor(public materialType?, public quality?) {}

	public buildFormGroup(formBuilder : FormBuilder){
		return formBuilder.group({
			'materialType': this.materialType,
			'quality': this.quality
		})
	}
}