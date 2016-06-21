import { name as ExtensionRemove } from '../extensionRemove';
import { Extensions } from '../../../../api/extensions';
import 'angular-mocks';

describe('ExtensionRemove', () => {
  beforeEach(() => {
    window.module(ExtensionRemove);
  });

  describe('controller', () => {
    let controller;
    const extension = {
      _id: 'extensionId'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(ExtensionRemove, {
          $scope: $rootScope.$new(true)
        }, {
          extension
        });
      });
    });

    describe('remove()', () => {
      beforeEach(() => {
        spyOn(Extensions, 'remove');
        controller.remove();
      });

      it('should remove a extension', () => {
        expect(Extensions.remove).toHaveBeenCalledWith(extension._id);
      });
    });
  });
});
