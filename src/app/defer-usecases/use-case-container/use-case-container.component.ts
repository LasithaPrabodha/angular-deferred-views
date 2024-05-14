import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnippetDialogContentComponent } from 'src/app/components/snippet-dialog-content/snippet-dialog-content.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SnippetDialogContentComponent],
  standalone: true,
  templateUrl: 'use-case-container.component.html',
  styleUrl: 'use-case-container.component.scss',
})
export default class UseCaseContainerComponent {}
