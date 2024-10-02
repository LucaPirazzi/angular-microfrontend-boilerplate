import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';


@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html'
})
export class WelcomeCardComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | null = null;

  constructor(
    @Inject(Injector) private injector: Injector,
    @Inject(ComponentFactoryResolver) private cfr: ComponentFactoryResolver
) { }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    const factory = this.cfr.resolveComponentFactory(comp);
    this.viewContainer?.createComponent(factory, undefined, this.injector);
  }


}
