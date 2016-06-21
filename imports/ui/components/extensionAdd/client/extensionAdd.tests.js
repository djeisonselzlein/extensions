import { name as ExtensionAdd } from '../extensionAdd';
import { Extensions } from '../../../../api/extensions';
import 'angular-mocks';

describe('ExtensionAdd', () => {
  beforeEach(() => {
    window.module(ExtensionAdd);
  });

  describe('controller', () => {
    let controller;
    const extension = {
      name: 'Foo',
      number: 'Birthday of Foo'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(ExtensionAdd, {
          $scope: $rootScope.$new(true)
        });
      });
    });

    describe('reset()', () => {
      it('should clean up extension object', () => {
        controller.extension = extension;
        controller.reset();

        expect(controller.extension).toEqual({});
      });
    });

    describe('submit()', () => {
      beforeEach(() => {
        spyOn(Extensions, 'insert');
        spyOn(controller, 'reset').and.callThrough();

        controller.extension = extension;

        controller.submit();
      });

      it('should insert a new extension', () => {
        expect(Extensions.insert).toHaveBeenCalledWith(extension);
      });

      it('should call reset()', () => {
        expect(controller.reset).toHaveBeenCalled();
      });
    });
  });
});
