package module

import (
	"FinalProject/api/service"
	"FinalProject/api/module"
	serviceImpl "FinalProject/impl/service"
)

type serviceModuleImpl struct {
	siswaService service.SiswaService
	mitraService service.MitraService
}

func NewServiceModuleImpl(dataModule module.DataModule) *serviceModuleImpl {
	return &serviceModuleImpl{
		siswaService: serviceImpl.NewSiswaServiceImpl(
			dataModule.GetSiswaRepository(),
		),
		mitraService: serviceImpl.NewMitraServiceImpl(
			dataModule.GetMitraRepository(),
		),
	}
}

func (s *serviceModuleImpl) GetSiswaService() service.SiswaService {
	return s.siswaService
}

func (s *serviceModuleImpl) GetMitraService() service.MitraService {
	return s.mitraService
}
