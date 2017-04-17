import {Component, OnInit}                  from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import * as Domain from '../../domain/index';
import {AluecoOrder} from "./order";
import {AluecoMaterial} from "./material";
import {AluecoOrderLocation} from "./orderLocation";
import {AluecoContainer} from "./container";
import {Observable} from "rxjs";
import {MdButtonToggleChange} from "@angular/material/button-toggle";
import {AluecoPartner, AluecoPartnerVestiging} from "../../domain/partner";
import {ActivatedRoute} from "@angular/router";

@Component({
  // moduleId:  module.id,
  selector: 'alueco-order-form',
  templateUrl: 'alueco-order-form.component.html'
})

export class AluecoOrderFormComponent implements OnInit {
  private active;
  material: AluecoMaterial;
  orderLocation: AluecoOrderLocation;
  selectedContainerType: string;

  order: AluecoOrder;
  submitted = false;
  orderForm: FormGroup;
  $materialTypes: FirebaseListObservable<any[]>;
  $materialQualities: FirebaseListObservable<any[]>;
  $containers: FirebaseListObservable<any[]>;
  $vestigingen: Observable<AluecoPartnerVestiging[]>;
  container: AluecoContainer;
  private $containerTypes;
  $partners: Observable<AluecoPartner[]>;
  private $partnerAutocompleteItems;
  selectedPartnerControl = new FormControl();

  constructor(private fb: FormBuilder, private af: AngularFire, private route: ActivatedRoute) {
    this.$materialTypes = af.database.list('materiaalsoort');
    this.$materialTypes.subscribe(e => console.log('material', e));
    this.$materialQualities = af.database.list('order_properties/quality');
    this.$containers = af.database.list('Containers');
    this.$partners = af.database.list('partners');
    this.$partnerAutocompleteItems = this.$partners
      .map(partners => partners.map(partner => partner.bedrijfsnaam));
    this.$containerTypes = this.$containers.map((containers) => this.transformToContainerTypes(containers));

    this.loadOrderOrCreateEmpty();
  }

  ngOnInit(): void {
    this.buildForm();
    this.$vestigingen = this.orderForm.valueChanges
      .filter((event) => event.partner)
      .map(event => event.partner.Vestigingen)
      .map(obj => Object.keys(obj).map(key => obj[key]));
    // .map(e => e)
    this.$vestigingen.subscribe(e => console.log('aaa', e))
  }

  buildForm(): void {
    this.orderForm = this.fb.group({
      materiaal: new FormControl(),
      partner: new FormControl(),
      vestiging: new FormControl(),
      container: this.fb.control('container'),
      orderLocation: this.orderLocation.toFormGroup(this.fb)
    });
    this.orderForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  private loadOrderOrCreateEmpty() {
    this.order = new AluecoOrder();
    this.material = new AluecoMaterial();
    this.orderLocation = new AluecoOrderLocation();
    this.container = new AluecoContainer();
  }

  transformToContainerTypes(containers: AluecoContainer[]): string[] {
    return containers
      .map((current) => current.type)
      .filter((type, i, arr) => arr.indexOf(type) === i);
  }


  partnerSelectionChanged(partner) {
    this.selectedPartnerControl = partner;
  }

  containerSelectionChanged(event: MdButtonToggleChange, container) {
    if (event.source.checked) {
      this.order.containers.push(container);
    } else {
      delete this.order.containers[container];
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log('onSubmit!', this.orderForm);
    if (this.orderForm.valid)
      this.af.database.list('orders').push(this.orderForm.value);
  }

  onDateChanged(event) {
    console.log('date changed', event);
  }

  displayFn(partner: AluecoPartner) {
    if (!partner || partner == null) {
      return '';
    }
    return partner.bedrijfsnaam;
  }

  onValueChanged(data?: any) {
    console.log('onValueChanged', data);
    // if (!this.orderForm) { return; }
    // const form = this.orderForm;
    // for (const field in this.formErrors) {
    //   // clear previous error message (if any)
    //   this.formErrors[field] = '';
    //   const control = form.get(field);
    //   if (control && control.dirty && !control.valid) {
    //     const messages = this.validationMessages[field];
    //     for (const key in control.errors) {
    //       this.formErrors[field] += messages[key] + ' ';
    //     }
    //   }
    // }
  }

  // formErrors = {
  //   'scrapType': '',
  //   'materialType': ''
  // };
  // validationMessages = {
  //   'type': {
  //     'required':      'Type is required.',
  //     'minlength':     'Name must be at least 4 characters long.',
  //     'maxlength':     'Name cannot be more than 24 characters long.'
  //   },
  //   'power': {
  //     'required': 'Power is required.'
  //   }
  // };
}
