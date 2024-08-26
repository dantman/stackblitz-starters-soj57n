import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// @ts-ignore
import { ConfigService } from 'udp-config-api';
// @ts-ignore
import { defineCustomElements } from 'unity-ambient-x/loader';

ConfigService.config = {};
defineCustomElements();

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <ambient-template-grid
              [maxChipsAllowed]=6
              [showHotlistButton]="true"
              [hotListIdentifier]='"contactID"'
              [productId]=44
              [queryId]='"b00e6adb-b691-4c3a-b704-2546ea21810f"'
              [apiCatalogId]='"342695a8-9172-485c-ac89-20ae5fecb1b0"'
              [entityName]='"Univerus.Unity.Mindscope.Project.Models.UdpLookup"'
              [apiMethodId]='"bdcf8a2f-344f-483b-937c-7c32480c8790"'
              [lookupApiMethodId]='"5d8b0198-253d-4f44-b346-83573eef1c51"'
              [tenantId]='"034A2261-E825-4857-9EC5-E1DC2E577EEB"'
              [accessToken]="accessToken"
              grid-bar-title="Data Bar"
              >
          </ambient-template-grid>
  `,
})
export class App {
  name = 'Angular';

  accessToken = new URL(location.href).searchParams.get('accessToken');
}

bootstrapApplication(App);
