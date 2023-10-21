import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEST_TYPE_LABELS, Test } from 'src/app/models/Test';
import { UImodules } from 'src/app/ui-modules';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test-card',
  standalone: true,
  imports: [CommonModule, ...UImodules, RouterModule],
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss'],
})
export class TestCardComponent {
  @Input({ required: true }) test!: Test;

  getTypeLabel(): string {
    return TEST_TYPE_LABELS[this.test.type];
  }
}
