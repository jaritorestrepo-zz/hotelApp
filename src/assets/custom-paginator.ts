import { MatPaginatorIntl } from '@angular/material';
import { LANGUAGE_CONFIG } from '@config/language.config';

export class CustomPaginator extends MatPaginatorIntl {
  public lang: any = LANGUAGE_CONFIG;
  itemsPerPageLabel = this.lang.paginator.itemsPerPage;
  nextPageLabel = this.lang.paginator.nextPage;
  previousPageLabel = this.lang.paginator.previousPage;
  lastPageLabel = this.lang.paginator.lastPage;
  firstPageLabel = this.lang.paginator.firstPage;

  getRangeLabel = function(page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
  };
}
